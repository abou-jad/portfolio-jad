import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Home } from "./home/home";
import { About } from "./about/about";
import { Project } from "./project/project";
@Component({
  selector: 'app-root',
  imports: [Navbar, Home, About, Project],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-museum');
}
