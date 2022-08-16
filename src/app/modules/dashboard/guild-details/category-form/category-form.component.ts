import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICategory } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  @Input() categories?: ICategory[];
  categoryForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(95)],
    ],
    description: [''],
  });

  selectedCategory?: ICategory;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  onSelectChange(category: ICategory) {
    this.selectedCategory = category;
    console.log(category);

    this.categoryForm.setValue({
      name: this.selectedCategory?.name,
      description: this.selectedCategory?.description,
    });
  }

  onSubmit() {}
}
