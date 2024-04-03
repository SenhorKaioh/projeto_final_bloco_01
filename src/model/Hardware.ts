import { Produto } from "./Produto";

export class Hardware extends Produto{

    private _componenteComputador: string;


	constructor(id: number, nome: string, tipo: number, preco: number, componenteComputador: string) {
        super(id, nome, tipo , preco)
		this._componenteComputador = componenteComputador;
	}

    /**
     * Getter componente
     * @return {string}
     */
	public get componente(): string {
		return this._componenteComputador;
	}

    /**
     * Setter componente
     * @param {string} value
     */
	public set componente(value: string) {
		this._componenteComputador = value;
	}
    public visualizar(): void {
        super.visualizar();
        console.log(`Componete do Computador: ${this._componenteComputador}`);
}
}