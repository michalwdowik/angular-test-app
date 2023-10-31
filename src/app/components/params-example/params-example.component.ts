import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from 'src/app/shared/interfaces/lesson';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';

@Component({
  selector: 'app-params-example',
  templateUrl: './params-example.component.html',
  styleUrls: ['./params-example.component.scss'],
})
export class ParamsExampleComponent implements OnInit {
  lessons: Lesson[] = [
    {
      name: 'Lesson 1',
      level: 'easy',
      description: 'This is the description for Lesson 1',
    },
    {
      name: 'Lesson 2',
      level: 'medium',
      description: 'This is the description for Lesson 2',
    },
    {
      name: 'Lesson 3',
      level: 'difficult',
      description: 'This is the description for Lesson 3',
    },
    {
      name: 'Lesson 4',
      level: 'easy',
      description: 'This is the description for Lesson 4',
    },
    {
      name: 'Lesson 5',
      level: 'medium',
      description: 'This is the description for Lesson 5',
    },
    {
      name: 'Lesson 6',
      level: 'difficult',
      description: 'This is the description for Lesson 6',
    },
    {
      name: 'Lesson 7',
      level: 'easy',
      description: 'This is the description for Lesson 7',
    },
    {
      name: 'Lesson 8',
      level: 'medium',
      description: 'This is the description for Lesson 8',
    },
    {
      name: 'Lesson 9',
      level: 'difficult',
      description: 'This is the description for Lesson 9',
    },
    {
      name: 'Lesson 10',
      level: 'easy',
      description: 'This is the description for Lesson 10',
    },
  ];

  selectedLesson: Lesson;

  selectLesson(lesson: Lesson) {
    this.selectedLesson = lesson;
  }

  constructor(
    private route: ActivatedRoute,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    if (this.route && this.route.paramMap) {
      this.route.paramMap.subscribe(params => {
        this.selectedLesson = this.lessons.find(
          lesson =>
            lesson.name.toLowerCase().replace(' ', '-') === params.get('name')
        );
      });
    }
  }

  isDark() {
    return this.themeService.isDarkTheme();
  }

  changeColor() {
    this.themeService.toggleTheme();
  }
}
