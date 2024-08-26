import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  public showLoadingIndicator!: boolean;
  constructor(private loadingService: LoadingService) {
    this.loadingService.currentStatus.subscribe(loadingIndicator => this.showLoadingIndicator = loadingIndicator);
  }

  loadingTextArray: string[] = [
    'Habit stacking!  Pair a habit you want to build with a current habit. |#MakeLearningADailyHabit',
    'Did you know? | The concept of Virtual reality (VR) dates back to the 1960s, with the first VR headset created by computer-graphics pioneer Ivan Sutherland',
    'Did you know? | The term “Internet of things (IoT)” was first coined in 1999 by computer scientist Kevin Ashton',
    'Did you know? | The creative power of Generative AI comes from a neural network called “Generative Adversial Network (GAN)”',
    'Take a short 5 min walk around your workspace after every 20 mins to increase blood flow and energy levels | #WellBeing',
    'Learn continually - there' + "'s" + ' always "one more thing" to learn! - Steve Jobs | #MakeLearningADailyHabit',
    'Please wait….we are getting your learning data ready.',
    'Learning is necessary to thrive in our fast-changing work environment. #MakeLearningADailyHabit',
    'Take a moment to stand up and do a quick neck and shoulder roll | #WellBeing',
    'Did you know that you can learn something new in just 90s? Check out 1C Reels mobile app on your work profile |#MakeLearningADailyHabit',
  ];
  loadingDispTextIndex=0;
  isLoaded = false;
  ngOnInit() {
    this.loadingService.currentStatus.subscribe(loadingIndicator => this.showLoadingIndicator = loadingIndicator);
    this.changeAnimeText();
  }

  showLoading() {
    
    this.showLoadingIndicator = true;
  }

  hideLoading() {
    this.showLoadingIndicator = false;
  }
  changeAnimeText() {
    setInterval(() => {
      this.loadingDispTextIndex = (this.loadingDispTextIndex + 1) % this.loadingTextArray.length;
    }, 7000)
  }
  imageLoad(){
      this.isLoaded= true;
      console.log("is loaded:",this.isLoaded);  
  }
}
