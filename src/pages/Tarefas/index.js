import React, { useState } from 'react'
import {Grid,TextField,Typography,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core'

export default function Tarefas(){
    const [tarefas,setTarefas] = useState([])
    const valorInicial = {id:'',tipo:'',descricao:'',dataFim:''}
    const [tarefa,setTarefa] = useState(valorInicial)

    const mudaAtributo = event =>{
        const{name,value} = event.target
        setTarefa({...tarefa,[name]:value})
    }

    return(
        <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <form>
                    <Typography component="h1" align="center">
                        Cadastro de Tarefas
                    </Typography>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="number"
                        id="id"
                        name="id"
                        label="Codigo da Tarefa"
                        autoFocus
                        value={tarefa.id}
                        onChange={mudaAtributo}
                    />
                    <TextField
                          variant="outlined"
                          margin="normal"
                          required fullWidth
                          type="text" id="descricao" name="descricao"
                          label="Descricao da Tarefa"
                          value={tarefa.descricao}
                    />
                    <FormControl fullWidth={true}>
                        <InputLabel id="tipo">Tipo da Tarefa</InputLabel>
                        <Select
                            labelId="tipo"
                            id="tipo"
                            value={tarefa.tipo}
                            required
                            onChange={e=>setTarefa({...tarefa,tipo:e.target.value})}>
                                <MenuItem value="pessoal">Pessoal</MenuItem>
                                <MenuItem value="trabalho">Trabalho</MenuItem>
                                <MenuItem value="faculdade">Faculdade</MenuItem>
                            </Select>

                    </FormControl>
                </form>
            </Grid>
        </Grid>
        </>
    )
}