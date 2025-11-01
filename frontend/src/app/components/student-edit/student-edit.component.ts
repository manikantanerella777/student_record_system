import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../services/student';

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student: Student = { name: '', rollNumber: '', department: '', year: undefined };
  loading = false;
  saving = false;
  error = '';
  studentId: string = '';

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentId = id;
      this.loadStudent(id);
    } else {
      this.error = 'No student ID provided';
    }
  }

  loadStudent(id: string) {
    this.loading = true;
    this.error = '';
    this.studentService.getById(id).subscribe({
      next: (student) => {
        this.student = student;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load student. Please check if the backend is running.';
        this.loading = false;
        console.error('Error loading student:', err);
      }
    });
  }

  save() {
    if (!this.student.name || !this.student.rollNumber) {
      this.error = 'Name and roll number are required.';
      return;
    }

    this.saving = true;
    this.error = '';
    this.studentService.update(this.studentId, this.student).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = 'Failed to save student. Please try again.';
        this.saving = false;
        console.error('Error saving student:', err);
      }
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
