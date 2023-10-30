import { Component, Input } from '@angular/core';
import { Lesson } from 'src/app/shared/interfaces/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent {
  @Input() selectedLesson: Lesson;

  get lessonName(): string {
    return this.selectedLesson?.name || 'No Lesson Selected';
  }

  get lessonDescription(): string {
    return this.selectedLesson?.description || '-';
  }

  get lessonLevel(): string {
    return this.selectedLesson?.level || '-';
  }
}
