import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../services/student';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  student: Student = { name: '', rollNumber: '', department: '', year: undefined, semester: '' };
  saving = false;
  error = '';

  constructor(private studentService: StudentService, private router: Router) {}

  save() {
    if (!this.student.name || !this.student.rollNumber) {
      this.error = 'Name and roll number are required.';
      return;
    }

    this.saving = true;
    this.error = '';
    this.studentService.create(this.student).subscribe({
      next: () => {
        this.saving = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = 'Failed to create student. Please try again.';
        this.saving = false;
        console.error('Error creating student:', err);
      }
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }

  resetForm() {
    this.student = { name: '', rollNumber: '', department: '', year: undefined, semester: '' };
    this.error = '';
  }
}
