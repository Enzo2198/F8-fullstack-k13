export interface Header {
  name: string
  text: string
}

interface Master {
  id: number | null
  name: string | null
}

export interface Employee extends Master{
  age: number | null
  address: string | null
  salary: number | null
}

export interface Product extends Master {
  short_name: string | null
  code: string | null
  import_price: number | null
  price: number | null
  remaining: number | null
  exp_date: string | null
  description: string | null
}