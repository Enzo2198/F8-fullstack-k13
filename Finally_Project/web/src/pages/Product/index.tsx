import {useState} from "react";
import {FTable, ProductDialog} from '../../components'
import {Header, Product} from '../../utils'
import {Autocomplete, Button, FormControl, FormControlLabel, Radio, RadioGroup, TableCell, TextField} from "@mui/material";


export default () => {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false)
  const [curProduct, setCurProduct] = useState<Product>({
    id: null,
    name: '',
    short_name: '',
    code: '',
    import_price: 0,
    price: 0,
    remaining: 0,
    exp_date: '',
    description: ''
  })

  const headers: Header[] = [
    { name: 'id', text: 'ID' },
    { name: 'name', text: 'Ten' },
    { name: 'short_name', text: 'Ten thay the' },
    { name: 'code', text: 'Ma' },
    { name: 'import_price', text: 'Gia Nhap' },
    { name: 'price', text: 'Gia Ban' },
    { name: 'remaining', text: 'Con Lai' },
    { name: 'exp_date', text: 'Han SD' },
    { name: 'description', text: 'Mo Ta' },
    { name: 'color', text: 'Mau Sac' },
    { name: 'unit', text: 'Don Vi' },
    { name: 'action', text: '' }
  ]

  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Hang 1', short_name: 'H1', code: '#1001', import_price: 100, price: 200,
      remaining: 100, exp_date: '08/2025', description: 'May tinh'},
  ])

  const onAdd = () => {
    setIsOpenDialog(true)
  }

  const onUpdate = (id: number) => {
    // @ts-ignore
    setCurProduct({...products.find(e => e.id === id)})
    setIsOpenDialog(true)
  }

  const onSave = () => {
    setProducts([...products, curProduct])
    setIsOpenDialog(false)
    // todo: call api and save
  }

  interface AutocompleteOption {
    label: string;
  }

  const Positon: AutocompleteOption[] = [
    { label: 'Trang'},
    { label: 'Vang'},
    { label: 'Do'},
    { label: 'Xanh duong'},
  ];

  const RenderColor = () => {
    return (
      <TableCell>
        <Autocomplete
          disablePortal
          options={Positon}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Mau sac" />}
        />
      </TableCell>
    )
  }

  const RenderUnit = () => {
    return (
      <TableCell>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="kg" control={<Radio />} label="Kg" />
            <FormControlLabel value="box" control={<Radio />} label="Box" />
          </RadioGroup>
        </FormControl>
      </TableCell>
    )
  }


  return (
    <>
      <h1>Product</h1>
      <Button variant="outlined" onClick={onAdd}>Add</Button>
      <FTable
        tableName={'product'}
        headers={headers}
        rows={products}
        color={RenderColor}
        unit={RenderUnit}
        onUpdate={onUpdate}
      />
      <ProductDialog
        product={curProduct}
        setProduct={setCurProduct}
        onSave={onSave}
        isOpen={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
      />
    </>
  )
}