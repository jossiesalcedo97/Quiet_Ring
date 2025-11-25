import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { OtpService } from 'src/app/core/services/otp.service';
import { MemberRequest } from 'src/app/core/interfaces/interface-member';
import { MemberService } from 'src/app/core/services/member.service';

@Component({
  standalone: true,
  selector: 'app-modal-custom-loading',
  imports: [CommonModule, IonicModule],
  templateUrl: './modal-custom-loading.component.html',
  styleUrls: ['./modal-custom-loading.component.scss']
})

export class ModalCustomLoadingComponent {

  constructor() { }

  ngOnInit() {
  }

}
