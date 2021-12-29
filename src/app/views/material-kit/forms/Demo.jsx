import React, { useState, Fragment } from 'react'
import { nanoid } from 'nanoid'
//import './App.css'
import data from './mock-data.json'
import ReadOnlyRow from './components/ReadOnlyRow'
import EditableRow from './components/EditableRow'



const Demo = () => {
    const [contacts, setContacts] = useState(data)
    const [addFormData, setAddFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
        form: '',
    })

    const [editFormData, setEditFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
        form: '',
    })

    const [editContactId, setEditContactId] = useState(null)

    const handleAddFormChange = (event) => {
        event.preventDefault()

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value

        const newFormData = { ...addFormData }
        newFormData[fieldName] = fieldValue

        setAddFormData(newFormData)
    }

    const handleEditFormChange = (event) => {
        event.preventDefault()

        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value

        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue

        setEditFormData(newFormData)
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault()
        console.log('added data', addFormData)
        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,
            form: addFormData.form,
        }
        console.log('newContact', newContact)
        console.log('contacts', contacts)
        const newContacts = [...contacts, { ...newContact }]
        console.log('newContacts', newContacts)
        setContacts(newContacts)
    }

    const handleEditFormSubmit = (event) => {
        event.preventDefault()

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
            form: editFormData.form,
        }

        const newContacts = [...contacts]

        const index = contacts.findIndex(
            (contact) => contact.id === editContactId
        )

        newContacts[index] = editedContact

        setContacts(newContacts)
        setEditContactId(null)
    }

    const handleEditClick = (event, contact) => {
        event.preventDefault()
        setEditContactId(contact.id)

        const formValues = {
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
            form: contact.form,
        }

        setEditFormData(formValues)
    }

    const handleCancelClick = () => {
        setEditContactId(null)
    }

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts]

        const index = contacts.findIndex((contact) => contact.id === contactId)

        newContacts.splice(index, 1)

        setContacts(newContacts)
    }

    return (
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Form</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <Fragment>
                                {editContactId === contact.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={
                                            handleEditFormChange
                                        }
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        contact={contact}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>

            <h2>Add a Contact</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder="Enter name..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="address"
                    required="required"
                    placeholder="Enter an addres..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="form"
                    required="required"
                    placeholder="Enter an Form..."
                    onChange={handleAddFormChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Demo
