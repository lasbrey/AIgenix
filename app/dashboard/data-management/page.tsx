'use client'
import React, { useState } from 'react';
import Modal from '@/components/ui/modal';
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from '@/components/ui/table'; // Import the Table components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const DataManagementPage = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Item 1', description: 'This is item 1', dateAdded: '2024-12-01' },
        { id: 2, name: 'Item 2', description: 'This is item 2', dateAdded: '2024-12-02' },
    ]);
    const [editData, setEditData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddData = (newData) => {
        setData([...data, { ...newData, id: data.length + 1 }]);
    };

    const handleEditData = (updatedData) => {
        setData(data.map((item) => (item.id === updatedData.id ? updatedData : item)));
        setIsModalOpen(false);
    };

    const handleDeleteData = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const openModal = (item = null) => {
        setEditData(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditData(null);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Data Management</h1>
                <Button
                    onClick={() => openModal()}
                >
                    Add New Data
                </Button>
            </div>

            {/* Data Table using Table Component */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Date Added</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.description}</TableCell>
                            <TableCell>{item.dateAdded}</TableCell>
                            <TableCell>
                                <button
                                    onClick={() => openModal(item)}
                                    className="text-blue-500 hover:text-blue-700 mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteData(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Delete
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Modal for Adding/Editing Data */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl font-semibold">{editData ? 'Edit Data' : 'Add New Data'}</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const newData = {
                            id: editData?.id || data.length + 1,
                            name: formData.get('name'),
                            description: formData.get('description'),
                            dateAdded: new Date().toISOString().split('T')[0],
                        };
                        editData ? handleEditData(newData) : handleAddData(newData);
                    }}
                    className="mt-4 space-y-4"
                >
                    <div>
                        <label htmlFor="name" className="block font-medium">Name</label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={editData ? editData.name : ''}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block font-medium">Description</label>
                        <Textarea
                            id="description"
                            name="description"
                            defaultValue={editData ? editData.description : ''}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-4 mt-4">
                        <Button
                            type="button"
                            onClick={closeModal}
                            className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                        >
                            {editData ? 'Save Changes' : 'Add Data'}
                        </Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default DataManagementPage;

