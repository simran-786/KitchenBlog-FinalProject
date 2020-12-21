import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: String;
  issue: any = {};
  updateForm!: FormGroup;
  form: any;

  constructor(private issueService: IssueService, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
  this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      Recipe: ['', Validators.required],
      content: ''
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {
        this.issue = res;
        this.form.get('Recipe').setValue(this.issue.Recipe);
        this.form.get('content').setValue(this.issue.content);

      });
    });
  }

  updateIssue(Recipe: any, content: any) {
    this.issueService.updateIssue(this.id, Recipe, content).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
    });
  }
}
