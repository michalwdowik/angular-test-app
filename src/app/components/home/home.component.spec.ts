import { HomeComponent } from './home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Home Component', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create Home Component', () => {
    expect(component).toBeTruthy();
  });

  it('Should display: `Angular Test App`', () => {
    const h1Element = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1Element.textContent).toBe('Angular Test App');
  });

  it('Should display 7 bullet points', () => {
    const bulletPointElements = fixture.debugElement.queryAll(By.css('li'));
    expect(bulletPointElements.length).toBe(7);
  });
});
