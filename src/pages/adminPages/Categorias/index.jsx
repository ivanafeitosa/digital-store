import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

import { useRef, useState } from 'react';
import { useBuscarCategorias, useCriarCategoria, useDeletarCategoria, useEditarCategoria } from '../../../hooks/CategoriaHooks';
import { useForm } from 'react-hook-form';



const Categorias = () => {

    const aviso = useRef();
    const [visibleCreate, setVisibleCreate] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);

    const { data: categorias } = useBuscarCategorias();
    const { mutateAsync: criarCategoria } = useCriarCategoria();
    const { mutateAsync: editarCategoria } = useEditarCategoria();
    const { mutateAsync: deletarCategoria } = useDeletarCategoria();

    const { register, handleSubmit, reset } = useForm();
    const { 
        register: registerEdit, 
        handleSubmit: handleSubmitEdit, 
        reset: resetEdit,
        setValue: setValueEdit 
    } = useForm();

    function criar(dados) {
        criarCategoria(dados, {
            onSuccess: () => {
                setVisibleCreate(false);
                reset();
                aviso.current.show({
                    severity: 'success',
                    summary: 'Aviso:',
                    detail: 'Categoria criada com sucesso!'
                })
            },
            onError: (error) => {
                aviso.current.show({
                    severity: 'error',
                    summary: 'Aviso:',
                    detail: error.message
                })
            }
        });
    }

    function editar(dados) {
        editarCategoria(dados, {
            onSuccess: () => {
                setVisibleEdit(false);
                resetEdit();
                aviso.current.show({
                    severity: 'success',
                    summary: 'Aviso:',
                    detail: 'Categoria atualizada com sucesso!'
                })
            },
            onError: (error) => {
                aviso.current.show({
                    severity: 'error',
                    summary: 'Aviso:',
                    detail: error.message
                })
            }
        });
    }

    function deletar(id) {
        confirmDialog({
            header: 'Aviso:',
            message: 'Deseja realmente apagar este item?',
            acceptLabel: 'Sim',
            rejectLabel: 'Não',
            accept: () => {
                deletarCategoria(id,
                {
                    onSuccess: () => {
                        aviso.current.show({
                            severity: 'success',
                            summary: 'Aviso:',
                            detail: 'Categoria deletada com sucesso!'
                        });
                    },
                    onError: (error) => {
                        aviso.current.show({
                            severity: 'error',
                            summary: 'Aviso:',
                            detail: error.message
                        })
                    }
                });
            }
        });
    }

    return (
        <>
            <h2 className='flex justify-content-between align-items-center'>
                Categorias
                <Button
                    label="Nova categoria"
                    icon={'pi pi-plus'}
                    className='bg-pink-600 hover:bg-pink-800 gap-3 border-0'
                    onClick={() => setVisibleCreate(true)} />
            </h2>
            <DataTable
                className='mt-4'
                value={categorias}
                paginator
                rows={10} 
                rowsPerPageOptions={[5, 10, 25, 50]}
            >
                <Column
                    field={"id"}
                    header={"Id"}
                />
                <Column
                    field={"nome"}
                    header={"Categoria"}
                />
                <Column
                    header={"Ações"}
                    bodyClassName={'w-2'}
                    body={(rowData) => (
                        <div className='flex gap-2'>
                            <Button
                                rounded
                                icon={'pi pi-pencil'}
                                className='bg-pink-600 hover:bg-pink-800 border-0'
                                onClick={() => {
                                    setValueEdit('nome', rowData.nome)
                                    setValueEdit('id', rowData.id)
                                    setVisibleEdit(true)}}
                            />
                            <Button
                                rounded
                                icon={'pi pi-trash'}
                                className='bg-pink-600 hover:bg-pink-800 border-0'
                                onClick={() => deletar(rowData.id)}
                            />
                        </div>
                    )}
                />

            </DataTable>
            <Sidebar
                visible={visibleCreate}
                position='right'
                onHide={() => setVisibleCreate(false)}
            >
                <form onSubmit={handleSubmit(criar)}>
                    <h3>Criar</h3>
                    <label htmlFor="categoria_nome" className='mb-2 block'>Categoria</label>
                    <InputText
                        id='cetgoria_nome'
                        placeholder='Digite o nome'
                        className='w-full mb-3'
                        {...register('nome')}
                    />
                    <Button
                        type='submit'
                        label='criar'
                        className='bg-pink-600 hover:bg-pink-800 w-full border-0'

                    />
                </form>
            </Sidebar>
            <Sidebar
                visible={visibleEdit}
                position='right'
                onHide={() => setVisibleEdit(false)}
            >
                <form onSubmit={handleSubmitEdit(editar)}>
                    <h3>Editar</h3>
                    <input
                        type='hidden'
                        {...registerEdit('id')}
                    />
                    <label htmlFor="categoria_nome" className='mb-2 block'>Categoria</label>
                    <InputText
                        id='cetgoria_nome'
                        placeholder='Digite o nome'
                        className='w-full mb-3'
                        {...registerEdit('nome')}
                    />
                    <Button
                        type='submit'
                        label='editar'
                        className='bg-pink-600 hover:bg-pink-800 w-full border-0'

                    />
                </form>
            </Sidebar>
            <ConfirmDialog />
            <Toast ref={aviso} position='bottom-right' />
        </>
    )
}

export default Categorias;