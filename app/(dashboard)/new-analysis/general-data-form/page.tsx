'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'

import { Form } from '@/components/ui/form'
import {
  CustomFormDate,
  CustomFormField,
  CustomFormSelect,
} from '@/components/form/FormComponents'
import {
  GeneralDataFormType,
  TypeOfMark,
  generalDataSchema,
  GeneralDataType,
} from '@/utils/types'
import { DatePicker } from '@/components/form/DatePicker'
import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from '@/utils/functions'
import { useAppSelector, useAppDispatch } from '@/redux-toolkit/hooks'
import { addGeneralData } from '@/features/generalDataSlice'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { store } from '@/redux-toolkit/store'

const GeneralDataFormPage = () => {
  const dataFromStorage = getDataFromLocalStorage('generalData')
  const dispatch = useAppDispatch()

  const router = useRouter()

  const form = useForm<GeneralDataFormType>({
    resolver: zodResolver(generalDataSchema),
    defaultValues: {
      predmet:
        dataFromStorage === null ? 'matematika' : dataFromStorage.predmet,
      // datum: dataFromStorage === null ? new Date() : dataFromStorage.datum,
      vrstaTesta:
        dataFromStorage === null
          ? 'Pismeni zadatak'
          : dataFromStorage.vrstaTesta,
      vrstaOcene:
        dataFromStorage === null
          ? TypeOfMark.NumericalMark
          : dataFromStorage.vrstaOcene,
      razred: dataFromStorage === null ? 1 : dataFromStorage.razred * 1,
      odeljenje: dataFromStorage === null ? 1 : dataFromStorage.odeljenje * 1,
      ukupanBrojUcenika:
        dataFromStorage === null ? 4 : dataFromStorage.ukupanBrojUcenika * 1,
      brojUcenikaKojiSuRadili:
        dataFromStorage === null
          ? 3
          : dataFromStorage.brojUcenikaKojiSuRadili * 1,
      brojZadataka:
        dataFromStorage === null ? '3' : dataFromStorage.brojZadataka,
    },
  })

  const onSubmit = (values: GeneralDataFormType) => {
    addDataToLocalStorage('generalData', values)
    // dispatch(addGeneralData(values))
    store.dispatch(addGeneralData(values))
    router.push('/new-analysis/task-levels-form')
    console.log('from form')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='bg-muted p-8 rounded'
      >
        <h2 className='font-semibold text-4xl mb-6'>Општи подаци</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start'>
          <CustomFormField
            name='predmet'
            control={form.control}
            labelText='Предмет'
          />
          <CustomFormField
            name='vrstaTesta'
            control={form.control}
            labelText='Врста теста'
          />
          {/* <CustomFormDate
            name='datum'
            labelText='Датум'
            control={form.control}
          /> */}
          <CustomFormSelect
            name='vrstaOcene'
            control={form.control}
            labelText='Врста оцене'
            items={['бројчана', 'не оцењује се']}
          />
          <CustomFormField
            name='razred'
            control={form.control}
            labelText='Разред'
          />
          <CustomFormField
            name='odeljenje'
            control={form.control}
            labelText='Одељење'
          />
          <CustomFormField
            name='ukupanBrojUcenika'
            control={form.control}
            labelText='Укупан број ученика'
          />
          <CustomFormField
            name='brojUcenikaKojiSuRadili'
            control={form.control}
            labelText='Број ученика који су радили'
          />
          <CustomFormField
            name='brojZadataka'
            control={form.control}
            labelText='Број задатака'
          />

          <Button type='submit' className='self-end'>
            Потврди
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default GeneralDataFormPage
