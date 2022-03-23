import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICategory } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  @Input() category?: ICategory;
  categoryForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(95)],
    ],
    description: [''],
  });

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.categoryForm.setValue({
      name: this.category?.name,
      description: this.category?.description,
    });
  }

  onSubmit() {}
}
