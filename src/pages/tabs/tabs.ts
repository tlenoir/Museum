import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ScannerPage } from '../scanner/scanner';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  
  tab2Root = ScannerPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
