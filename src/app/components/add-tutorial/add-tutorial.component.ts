import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    title: '',
    description: '',
    author:'',
    content:'',
    content_image: '',
    created:'',
    updated:'',
    published: false

  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      author: this.tutorial.author,
      content: this.tutorial.content,
      content_image: this.tutorial.content_image,
      created: this.tutorial.created,
      updated: this.tutorial.updated
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      author:'',
      content:'',
      content_image:'',
      created:'',
      updated:'',
      published: false
    };
  }

}
