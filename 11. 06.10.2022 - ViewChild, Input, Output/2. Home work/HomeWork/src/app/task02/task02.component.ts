// Задача 2. Сформировать массив фильмов в фильмотеке (использовать классы, фильмов не менее 10, хранить в локальном
// хранилище, фильм описывается названием, фамилией и инициалами режиссера, жанром, годом выпуска). Вывести фильмы в
// компонент. По командным кнопкам, выбирать записи:
// •	с заданным жанром
// •	с заданным режиссером
// •	с заданным годом выпуска.

import {Component, OnInit} from '@angular/core';
import {Film} from "../../models/task02/Film";
import {FilmData} from "../../models/task02/FilmData";

@Component({
    selector: 'app-task02',
    templateUrl: './task02.component.html',
    styleUrls: ['./task02.component.css']
})
export class Task02Component implements OnInit {

    // исходная коллекция
    filmList: Film[] = [];

    // коллекция для отображения
    filmListView: Film[] = [];

    // коллекция жанров
    get genreList(): string[] {
        return [...new Set(this.filmList.map(f => f.genre))];
    }

    // коллекция режиссеров
    get directorList(): string[] {
        return [...new Set(this.filmList.map(f => f.director))];
    }

    // коллекция годов выпуска
    get yearList(): number[] {
        return [...new Set(this.filmList.map(f => f.year))];
    }


    ngOnInit(): void {
        this.filmListView = this.filmList = FilmData.data;
    }

    // исходная коллекция
    selectByDefault(): void {
        this.filmListView = this.filmList;
    }

    // выборка фильмов с заданным жанром
    selectByGenre(genre: string): void {
        this.filmListView = this.filmList.filter(f => f.genre === genre);
    }

    // выборка фильмов с заданным режиссером
    selectByDirector(director: string): void {
    this.filmListView = this.filmList.filter(f => f.director === director);
    }

    // выборка фильмов с заданным годом выпуска.
    selectByYear(year: number): void {
        this.filmListView = this.filmList.filter(f => f.year === year);
    }
}
