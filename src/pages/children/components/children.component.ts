import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../../shared/services/name-list.service';
import { FtInput } from '../../../shared/components/ft-input/ft-input';
import { SelectComponent } from '../../../ng2-ft-select/select';

@Component({
	selector: 'sd-children',
	moduleId: module.id,
	templateUrl: './children.component.html',
	styleUrls: ['./children.component.css'],
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, FtInput, SelectComponent]
})
export class ChilCmp {
	public items:Array<any> = [
		{
			text: 'Austria',
			children: [
				{id: 54, text: 'Vienna'}
			]
		},
		{
			text: 'Belgium',
			children: [
				{id: 2, text: 'Antwerp'},
				{id: 9, text: 'Brussels'}
			]
		},
		{
			text: 'Bulgaria',
			children: [
				{id: 48, text: 'Sofia'}
			]
		},
		{
			text: 'Croatia',
			children: [
				{id: 58, text: 'Zagreb'}
			]
		},
		{
			text: 'Czech Republic',
			children: [
				{id: 42, text: 'Prague'}
			]
		},
		{
			text: 'Denmark',
			children: [
				{id: 13, text: 'Copenhagen'}
			]
		},
		{
			text: 'England',
			children: [
				{id: 6, text: 'Birmingham'},
				{id: 7, text: 'Bradford'},
				{id: 26, text: 'Leeds'},
				{id: 30, text: 'London'},
				{id: 34, text: 'Manchester'},
				{id: 47, text: 'Sheffield'}
			]
		},
		{
			text: 'Finland',
			children: [
				{id: 25, text: 'Helsinki'}
			]
		},
		{
			text: 'France',
			children: [
				{id: 35, text: 'Marseille'},
				{id: 40, text: 'Paris'}
			]
		},
		{
			text: 'Germany',
			children: [
				{id: 5, text: 'Berlin'},
				{id: 8, text: 'Bremen'},
				{id: 12, text: 'Cologne'},
				{id: 14, text: 'Dortmund'},
				{id: 15, text: 'Dresden'},
				{id: 17, text: 'Düsseldorf'},
				{id: 18, text: 'Essen'},
				{id: 19, text: 'Frankfurt'},
				{id: 23, text: 'Hamburg'},
				{id: 24, text: 'Hannover'},
				{id: 27, text: 'Leipzig'},
				{id: 37, text: 'Munich'},
				{id: 50, text: 'Stuttgart'}
			]
		},
		{
			text: 'Greece',
			children: [
				{id: 3, text: 'Athens'}
			]
		},
		{
			text: 'Hungary',
			children: [
				{id: 11, text: 'Budapest'}
			]
		},
		{
			text: 'Ireland',
			children: [
				{id: 16, text: 'Dublin'}
			]
		},
		{
			text: 'Italy',
			children: [
				{id: 20, text: 'Genoa'},
				{id: 36, text: 'Milan'},
				{id: 38, text: 'Naples'},
				{id: 39, text: 'Palermo'},
				{id: 44, text: 'Rome'},
				{id: 52, text: 'Turin'}
			]
		},
		{
			text: 'Latvia',
			children: [
				{id: 43, text: 'Riga'}
			]
		},
		{
			text: 'Lithuania',
			children: [
				{id: 55, text: 'Vilnius'}
			]
		},
		{
			text: 'Netherlands',
			children: [
				{id: 1, text: 'Amsterdam'},
				{id: 45, text: 'Rotterdam'},
				{id: 51, text: 'The Hague'}
			]
		},
		{
			text: 'Poland',
			children: [
				{id: 29, text: 'Łódź'},
				{id: 31, text: 'Kraków'},
				{id: 41, text: 'Poznań'},
				{id: 56, text: 'Warsaw'},
				{id: 57, text: 'Wrocław'}
			]
		},
		{
			text: 'Portugal',
			children: [
				{id: 28, text: 'Lisbon'}
			]
		},
		{
			text: 'Romania',
			children: [
				{id: 10, text: 'Bucharest'}
			]
		},
		{
			text: 'Scotland',
			children: [
				{id: 21, text: 'Glasgow'}
			]
		},
		{
			text: 'Spain',
			children: [
				{id: 4, text: 'Barcelona'},
				{id: 32, text: 'Madrid'},
				{id: 33, text: 'Málaga'},
				{id: 46, text: 'Seville'},
				{id: 53, text: 'Valencia'},
				{id: 59, text: 'Zaragoza'}
			]
		},
		{
			text: 'Sweden',
			children: [
				{id: 22, text: 'Gothenburg'},
				{id: 49, text: 'Stockholm'}
			]
		}
	];

	private value:any;
	private disabled:boolean;

	private newName: string;

	constructor(public nameListService: NameListService) {
		this.value = {};
		this.disabled =false;
	}

	selected(value:any) {
		this.value = value;
		console.log('Selected value is: ', value);
	}

	teste(value:any) {
		console.log('value', value);
	}

	removed(value:any):void {
		console.log('Removed value is: ', value);
	}

	typed(value:any):void {
		console.log('New search input: ', value);
	}

	refreshValue(value:any):void {
		this.value = value;
	}

	/*
	 * @param newname  any text as input.
	 * @returns return false to prevent default form submit behavior to refresh the page.
	 */
	addName(): boolean {
		this.nameListService.add(this.newName);
		this.newName = '';
		return false;
	}
}
