import { Component, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NighthawkBootstrapService } from 'ngx-nighthawk';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private readonly vcr: ViewContainerRef,
    private readonly nighthawk: NighthawkBootstrapService
  ) {}

  public ngAfterViewInit(): void {
    this.nighthawk.setVcrInstance(this.vcr);
    this.nighthawk.loadApplication({
      timezone: 'guess',
      databaseTimezone: 'UTC',
      pageLoaderEnabled: true,
      pageLoaderSize: 54,
      pageLoaderType: 'tube-spinner',
      pageLoaderCustomImagePath: false,
      routeLoaderEnabled: false,
      minimumLoaderTime: 1000,
      manualLoader: false,
      fonts: [],
    });
  }
}
