import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TieredMenuModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  items: MenuItem[] | undefined;
  playlists: string[] = ['My Playlist 1', 'My Playlist 2', 'My Playlist 3']; // Фиктивные массивы плейлистов
  
  ngOnInit() {
      // Создание элементов меню
      this.items = [
          {
              label: 'Actions',
              items: [
                  {
                      label: 'Add Like',
                      icon: 'pi pi-thumbs-up',
                      command: () => this.addLike()
                  },
                  {
                      label: 'Add to Playlist',
                      icon: 'pi pi-list',
                      items: this.createPlaylistItems() // Использование созданных элементов плейлистов
                  }
              ]
          }
      ];
  }

  // Метод для создания элементов плейлистов
  createPlaylistItems(): MenuItem[] {
      return this.playlists.map(playlist => ({
          label: playlist,
          command: () => this.addToPlaylist(playlist)
      }));
  }

  // Метод для добавления в плейлист
  addToPlaylist(playlist: string) {
      console.log(`Added to ${playlist}`);
  }

  // Метод для добавления лайка
  addLike() {
      console.log('Add Like clicked');
  }
}


