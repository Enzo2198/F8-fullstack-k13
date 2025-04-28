import {DialogContainer} from "../../index.ts";
import {Stack, TextField} from "@mui/material";
import {ProductDialogProp} from "../../../utils";

export default ({isOpen, onClose, product, setProduct, onSave}: ProductDialogProp) => {

  const onChange = (event: any) => {
    setProduct({...product, [event.target.name]: event.target.value})
  }

  return (
    <DialogContainer
      isOpen={isOpen}
      onClose={onClose}
      onSave={onSave}
    >
      <Stack sx={{ width: 450 }} spacing={2}>
        <TextField
          fullWidth name={'name'} label="Name" variant="outlined" value={product.name} onChange={onChange}
        />
        <TextField
          fullWidth name={'short_name'} label="short_name" variant="outlined" value={product.short_name} onChange={onChange}
        />
        <TextField
          fullWidth name={'code'} label="code" variant="outlined" value={product.code} onChange={onChange}
        />
        <TextField
          fullWidth name={'import_price'} label="import_price" variant="outlined" value={product.import_price} onChange={onChange}
        />
        <TextField
          fullWidth name={'price'} label="price" variant="outlined" value={product.price} onChange={onChange}
        />
        <TextField
          fullWidth name={'remaining'} label="remaining" variant="outlined" value={product.remaining} onChange={onChange}
        />
        <TextField
          fullWidth name={'exp_date'} label="exp_date" variant="outlined" value={product.exp_date} onChange={onChange}
        />
        <TextField
          fullWidth name={'description'} label="description" variant="outlined" value={product.description} onChange={onChange}
        />
      </Stack>
    </DialogContainer>
  )
}