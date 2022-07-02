import { atom } from 'jotai'

export enum ModalName {
  Region = 'REGION',
  Category = 'CATEGORY',
  Search = 'SEARCH',
}

export const modalAtom = atom<ModalName | null>(null)
