import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { Student } from '../../services/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  loading = false;
  error = '';

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.fetchStudents();
  }

  trackByStudentId(index: number, student: Student): string {
    return student._id || index.toString();
  }

  fetchStudents() {
    this.loading = true;
    this.error = '';
    this.studentService.getAll().subscribe({
      next: (students) => {
        this.students = students;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load students. Please check if the backend is running.';
        this.loading = false;
        console.error('Error fetching students:', err);
      }
    });
  }

  editStudent(id: string) {
    this.router.navigate(['/edit', id]);
  }

  deleteStudent(id: string) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.delete(id).subscribe({
        next: () => {
          this.fetchStudents();
        },
        error: (err) => {
          this.error = 'Failed to delete student';
          console.error('Error deleting student:', err);
        }
      });
    }
  }
}
