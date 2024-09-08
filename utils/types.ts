import { z } from 'zod'

export type GeneralDataType = {
  id: string
  predmet: string
  // datum: Date
  vrstaTesta: string
  vrstaOcene: string
  razred: string | number
  odeljenje: string | string
  ukupanBrojUcenika: number
  brojUcenikaKojiSuRadili: number
  brojZadataka: number
}

export enum TypeOfMark {
  NumericalMark = 'бројчана',
  WithoutMark = 'не оцењује се',
}

export const generalDataSchema = z.object({
  predmet: z.string().min(1, {
    message: 'Морате унети назив предмета.',
  }),
  vrstaOcene: z.nativeEnum(TypeOfMark),
  vrstaTesta: z.string().min(1, {
    message: 'Морате унети врсту теста.',
  }),
  razred:
    z.number().min(1).max(8) ||
    z.string().min(1, {
      message: 'Морате унети разред.',
    }),
  odeljenje:
    z.number().min(1, {
      message: 'Морате унети одељење.',
    }) ||
    z.string().min(1, {
      message: 'Морате унети одељење.',
    }),
  ukupanBrojUcenika: z.number().min(1, {
    message: 'Морате унети укупан број ученика.',
  }),
  brojUcenikaKojiSuRadili: z.number().min(1, {
    message: 'Морате унети број ученика који су радили.',
  }),
  brojZadataka: z.string(),
  // datum: z.date(),
})

export type GeneralDataFormType = z.infer<typeof generalDataSchema>
