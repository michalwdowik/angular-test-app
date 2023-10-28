import { Component, Input } from '@angular/core';
import { Lesson } from 'src/app/shared/interfaces/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent {
  @Input() selectedLesson: Lesson;
}
