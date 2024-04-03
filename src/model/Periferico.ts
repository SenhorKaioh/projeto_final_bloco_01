import { Produto } from "./Produto";

export class Periférico extends Produto{

    private _componente: string;

	constructor(id: number, nome: string, tipo: number, preco: number,componente: string) {
        super(id, nome, tipo, preco)
		this._componente = componente;
	}

    /**
     * Getter componente
     * @return {string}
     */
	public get componente(): string {
		return this._componente;
	}

    /**
     * Setter componente
     * @param {string} value
     */
	public set componente(value: string) {
		this._componente = value;
	}
    public visualizar(): void {
        super.visualizar();
        console.log(`Periférico: ${this._componente}`);
}
}