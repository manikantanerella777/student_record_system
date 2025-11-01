import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentAddComponent } from './student-add.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudentAddComponent', () => {
  let component: StudentAddComponent;
  let fixture: ComponentFixture<StudentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentAddComponent],
      imports: [FormsModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(StudentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
