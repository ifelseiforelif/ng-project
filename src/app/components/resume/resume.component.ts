import { Component } from '@angular/core';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { KnowledgeComponent } from '../knowledge/knowledge.component';
import { PhotoComponent } from '../photo/photo.component';
import { LinksComponent } from '../links/links.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    WorkExperienceComponent,
    KnowledgeComponent,
    PhotoComponent,
    LinksComponent,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {}
