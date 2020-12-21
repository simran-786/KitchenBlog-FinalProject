import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
    this.createForm = this.fb.group({
      Recipe: ['', Validators.required],
      content: ''
    });
  }

  addIssue(Recipe: any, content: any) {
    this.issueService.addIssue(Recipe, content).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit(): void {
  }

}

