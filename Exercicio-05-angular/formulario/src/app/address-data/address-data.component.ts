import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-data',
  templateUrl: './address-data.component.html',
  styleUrls: ['./address-data.component.scss']
})
export class AddressDataComponent {
  addressForm = this.fb.group({
    street: [null, Validators.required],
    number: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'Rondônia', abbreviation: 'RO'},
    {name: 'Acre', abbreviation: 'AC'},
    {name: 'Amazonas', abbreviation: 'AM'},
    {name: 'Roraima', abbreviation: 'RR'},
    {name: 'Pará', abbreviation: 'PA'},
    {name: 'Amapá', abbreviation: 'AP'},
    {name: 'Tocantins', abbreviation: 'TO'},
    {name: 'Maranhão', abbreviation: 'MA'},
    {name: 'Piauí', abbreviation: 'PI'},
    {name: 'Ceará', abbreviation: 'CE'},
    {name: 'Rio Grande do Norte', abbreviation: 'RN'},
    {name: 'Paraíba', abbreviation: 'PB'},
    {name: 'Pernambuco', abbreviation: 'PE'},
    {name: 'Alagoas', abbreviation: 'AL'},
    {name: 'Sergipe', abbreviation: 'SE'},
    {name: 'Bahia', abbreviation: 'BA'},
    {name: 'Minas Gerais', abbreviation: 'MG'},
    {name: 'Espírito Santo', abbreviation: 'ES'},
    {name: 'Rio de Janeiro', abbreviation: 'RJ'},
    {name: 'São Paulo', abbreviation: 'SP'},
    {name: 'Paraná', abbreviation: 'PR'},
    {name: 'Santa Catarina', abbreviation: 'SC'},
    {name: 'Rio Grande do Sul', abbreviation: 'RS'},
    {name: 'Mato Grosso do Sul', abbreviation: 'MS'},
    {name: 'Mato Grosso', abbreviation: 'MT'},
    {name: 'Goiás', abbreviation: 'GO'},
    {name: 'Distrito Federal', abbreviation: 'DF'}
  ];

  constructor(private fb: FormBuilder) {}
}
