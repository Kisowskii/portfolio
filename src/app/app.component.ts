import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { NAV_SECTIONS, Section, resumeData } from "./data";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements AfterViewInit {
  readonly data = resumeData;
  readonly sections = NAV_SECTIONS;
  readonly quickTags = [
    "Angular",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "WCAG 2.1/2.2",
  ];
  readonly heroWords = this.data.name.split(" ");

  active: Section = "About";
  menuOpen = false;

  @ViewChild("mainEl") mainEl!: ElementRef<HTMLElement>;
  @ViewChildren("sectionEl") sectionEls!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    // Ustaw początkową aktywną sekcję
    setTimeout(() => this.onScroll(), 100);
  }

  onScroll(): void {
    const main = this.mainEl.nativeElement;
    const mainTop = main.scrollTop;
    const mainHeight = main.clientHeight;
    const centerY = mainTop + mainHeight / 4;

    let closestSection: Section = "About";
    let closestDistance = Infinity;

    this.sectionEls.forEach((el) => {
      const section = el.nativeElement.dataset["section"] as Section;
      const top = el.nativeElement.offsetTop;
      const distance = Math.abs(top - centerY);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestSection = section;
      }
    });

    if (this.active !== closestSection) {
      this.active = closestSection;
    }
  }

  scrollTo(section: Section): void {
    const target = this.sectionEls
      .toArray()
      .find(
        (el) => el.nativeElement.dataset["section"] === section,
      )?.nativeElement;

    target?.scrollIntoView({ behavior: "smooth" });
    this.active = section;
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
