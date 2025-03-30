/*
              Initialize headers, members, btn

                            │
                            │
                            ▼
         const thead = document.querySelector('.table-header')
         const tbody = document.querySelector('.table')

                            │
                            │
                            ▼
                     forEach members

                            │
                            │
                            ▼
                       let row = ''

              row += '<div class="table-body">'

                            │
                            │
                            ▼
                     forEach headers

                            │
                            │
                            ▼           yes
                     if (index === 0) ────────► thead.innerHTML += `<div class="table-header__cell">${header.text}</div>`

                            │ no                                                   │
                            │                                                      │
                            ▼                                                      │
                                                                                   │
  row += `<div class="table-body__cell">${member[header.value]}</div>`  ◄──────────┘

                            │
                            │
                            ▼
                     row += '</div>'

                            │
                            │
                            │
                            ▼
                    tbody.innerHTML += row

 */
const headers = [
    {value: 'id', text:'Id'},
    {value: 'name', text:'Name'},
    {value: 'mail', text:'Mail'},
    {value: 'action', text:'Action'},
]

const members = [
    {id: 1, name: 'Tran Van A', mail: 'a@test.com', action: 'btn'},
    {id: 2, name: 'Tran Van B', mail: 'b@test.com', action: 'btn'},
    {id: 3, name: 'Tran Van C', mail: 'c@test.com', action: 'btn'},
]

const btn = `
    <button class="edit-btn">
      <span class="mdi mdi-pencil"></span> edit
    </button>
    <button class="del-btn">
      <span class="mdi mdi-trash-can-outline"></span> delete
    </button>
`
members.forEach(member => member.action = btn)

const thead = document.querySelector('.table-header')
const tbody = document.querySelector('.table')

members.forEach((member, index) => {
    let row = ''
    row += '<div class="table-body">'
    headers.forEach(header => {
        if (index === 0) thead.innerHTML += `<div class="table-header__cell">${header.text}</div>`
        row += `<div class="table-body__cell">${member[header.value]}</div>`
    })
    row += '</div>'
    tbody.innerHTML += row
})

/*

                function onClickOpen

                         │
                         │
                         │
                         ▼
    const overlay = document.querySelector('.overlay')

                         │
                         │
                         │
                         ▼
                overlay.setAttribute

                         │
                         │
                         ▼
   const editBtns = document.querySelectorAll('.edit-btn')

                         │
                         │
                         │
                         ▼
                  forEach editBtns

                         │
                         │
                         │
                         ▼
     btn.addEventListener('click', onClickOpen)

                         │
                         │
                         │
                         ▼
                function onClickClose

                         │
                         │
                         │
                         ▼
    const overlay = document.querySelector('.overlay')

                         │
                         │
                         │
                         ▼
              overlay.removeAttribute

                         │
                         │
                         │
                         ▼
     const deleteBtns = document.querySelectorAll(
         '.dialog__header__icon, .dialog__action')

                         │
                         │
                         │
                         ▼
               forEach deleteBtns

                         │
                         │
                         │
                         ▼
     btn.addEventListener('click', onClickClose)

 */

// Click btn open dialog
const onClickOpen = () => {
    const overlay = document.querySelector('.overlay')
    overlay.setAttribute('style', 'display:flex')
}
const editBtns = document.querySelectorAll('.edit-btn')
editBtns.forEach(btn => {
    btn.addEventListener('click', onClickOpen)
})

// Click btn close dialog
const onClickClose = () => {
    const overlay = document.querySelector('.overlay')
    overlay.removeAttribute('style')
}

const deleteBtns = document.querySelectorAll(
    '.dialog__header__icon, .dialog__action')
deleteBtns.forEach(btn => {
    btn.addEventListener('click', onClickClose)
})

//-------------------Show subItem-------------------------
/*

                       function onClickShowBtn

                                 │
                                 │
                                 │
                                 ▼
     const subItem = document.querySelector('.side-bar__item__child')

                                 │
                                 │
                                 │
                                 ▼
              ┌───────────────────────────────────────────────────────────────────────────────────┐
              │                                            yes                                    │
              │ if (subItem.style.display === 'none')   ─────────► subItem.style.display = 'block'│
              │                                                                                   │
              │                  │                                                                │
              │                  │ no                                                             │
              │                  │                                                                │
              │                  ▼                                                                │
              │     subItem.style.display = 'none'                                                │
              └───────────────────────────────────────────────────────────────────────────────────┘

                                 │
                                 │
                                 │
                                 ▼
           const showBtn = document.querySelector('.mainItem')

                                 │
                                 │
                                 │
                                 ▼
            showBtn.addEventListener('click', onClickShowBtn)

 */
const onClickShowBtn = () => {
    const subItem = document.querySelector('.side-bar__item__child')
    if (subItem.style.display === 'none') {
        subItem.style.display = 'block'
    } else {
        subItem.style.display = 'none'
    }
}

const showBtn = document.querySelector('.mainItem')
showBtn.addEventListener('click', onClickShowBtn)



