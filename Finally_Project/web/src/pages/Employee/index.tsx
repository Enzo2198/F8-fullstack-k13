import { useState } from 'react';
import {EmployeeDialog, FTable} from '../../components'
import {Header, Employee} from '../../utils'
import {Button, Autocomplete, FormControl, FormControlLabel, Radio, RadioGroup, TableCell, TextField} from "@mui/material"

export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [curEmployee, setCurEmployee] = useState<Employee>({
    id: null,
    name: '',
    age: 0,
    salary: 0,
    address: ''
  })

  const headers: Header[] = [
    {name: 'id', text: 'ID'},
    {name: 'name', text: 'Ten'},
    {name: 'age', text: 'Tuoi'},
    {name: 'salary', text: 'Luong'},
    {name: 'address', text: 'Dia Chi'},
    {name: 'positon', text: 'Chuc Vu'},
    {name: 'status', text: 'Trang Thai'},
    {name: 'action', text: ''}
  ]

  const [employees, setEmployee] = useState<Employee[]>([
    {id: 1, name: 'Dung', age: 20, salary: 2000, address: 'Thanh Oai - Ha Noi'},
    {id: 2, name: 'Trung', age: 22, salary: 2000, address: 'Quoc Oai - Ha Noi'},
    {id: 3, name: 'Son', age: 221, salary: 2000, address: 'Quoc Oai 2 - Ha Noi'},
  ])

  const onAdd = () => {
    setIsOpenDialog(true)
  }

  const onUpdate = (id: number) => {
    // @ts-ignore
    setCurEmployee({...employees.find(e => e.id === id)})
    setIsOpenDialog(true)
  }

  const onSave = () => {
    setEmployee([...employees, curEmployee])
    setIsOpenDialog(false)
    // todo: call api and save
  }

  interface AutocompleteOption {
    label: string;
  }

  const Positon: AutocompleteOption[] = [
    { label: 'Giam doc'},
    { label: 'Truong phong'},
    { label: 'Truong nhom'},
    { label: 'Nhan vien'},
  ];

  const RenderPosition = () => {
    return (
      <TableCell>
        <Autocomplete
          disablePortal
          options={Positon}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Chuc vu" />}
        />
      </TableCell>
    )
  }

  const RenderStatus = () => {
    return (
      <TableCell>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="working" control={<Radio />} label="Dang lam" />
            <FormControlLabel value="resigned" control={<Radio />} label="Da nghi" />
          </RadioGroup>
        </FormControl>
      </TableCell>
    )
  }

  return (
    <>
      <h1>Employee</h1>
      <Button variant="outlined" onClick={onAdd}>Add</Button>
      <FTable
        tableName={'employee hihi'}
        headers={headers}
        rows={employees}
        position={RenderPosition}
        status={RenderStatus}
        onUpdate={onUpdate}
      />
      <EmployeeDialog
        employee={curEmployee}
        setEmployee={setCurEmployee}
        onSave={onSave}
        isOpen={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
      />
    </>
  )
}