import { Address, Cell, ContractSource, StateInit } from "..";

export async function contractAddress(source: ContractSource) {
    let cell = new Cell();
    let state = new StateInit({ code: source.initialCode, data: source.initialData });
    state.writeTo(cell);
    let hash = await cell.hash();
    return new Address(source.workchain, hash);
}