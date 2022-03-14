import { Component, VERSION } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from 'ngx-qrcode2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QRCode';
  name = 'Angular' + VERSION.major;
  elementType = NgxQrcodeElementTypes.URL; 
  correctionLevel =   NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.cozentus.com/';
}
