//cSpell:Ignore descricao
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import DeleteIcon from '@material-ui/icons/DeleteForeverTwoTone'
import EditIcon from '@material-ui/icons/EditTwoTone'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles(theme => ({
    select:{
        marginBottom: theme.spacing(2)
    },
    botao: {
        marginTop: theme.spacing(2)
    }
  }))
    


export default function Tarefas() {
    const classes = useStyles()
    const [tarefas, setTarefas] = useState([])
    const valorInicial = { id: '', tipo: '', processador: '', prazoFim: '',placamae:'',memoria:'',hdssd:'',gabinete:'',placavideo:'',fonte:''}
    const [tarefa, setTarefa] = useState(valorInicial)
    const [editando, setEditando] = useState(false)
    const hoje = new Date().toISOString().slice(0,10)

    useEffect(() => {
        setTarefas(JSON.parse(localStorage.getItem("tarefas")) || [])
    }, []);

    useEffect(() => {
        function salvaDados() {
            localStorage.setItem("tarefas", JSON.stringify(tarefas))
        }
        salvaDados()
    }, [tarefas]);


    const mudaAtributo = event => {
        const { name, value } = event.target
        setTarefa({ ...tarefa, [name]: value })
    }
    const apagaRegistro = id => {       
        let index = tarefas.map((tarefa) => tarefa.id).indexOf(id);
        if (index > -1) {
            tarefas.splice(index, 1) //o 1o parâmetro é o índice do array e o segundo o número de itens que serão removidos
            setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
        }
    }


    function salvaRegistro(event) {
        event.preventDefault()//Não recarrega o formulário
        if (editando) {
            apagaRegistro(tarefa.id)
        }
        setTarefa({ id: tarefa.id, tipo: tarefa.tipo, placamae: tarefa.placamae, memoria: tarefa.memoria, hdssd: tarefa.hdssd, 
            processador: tarefa.processador, gabinete: tarefa.gabinete, fonte: tarefa.fonte, placavideo: tarefa.placavideo, prazoFim: tarefa.prazoFim })
        setTarefas([...tarefas, tarefa])
        setTarefa(valorInicial) //limpa os campos
        setEditando(false)
    }

  

    function converteData(data){
        return new Date(data).toLocaleDateString('pt-BR',{timeZone: 'UTC'})
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={salvaRegistro}>
                        <Typography
                            component="h1"
                            align="center"
                        >Montagem Computadores </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="number"
                            id="id"
                            label="Código do Computador"
                            name="id"
                            autoFocus
                            value={tarefa.id}
                            disabled={editando}
                            onChange={mudaAtributo}
                        />
                        <FormControl fullWidth={true}>
                            <InputLabel id="tipo">Tipo do Computador</InputLabel>
                            <Select
                                className={classes.select}
                                labelId="tipo"
                                id="tipo"
                                value={tarefa.tipo}
                                required
                                onChange={e => setTarefa({ ...tarefa, tipo: e.target.value })}
                            >
                                <MenuItem value="Jogos">Jogos</MenuItem>
                                <MenuItem value="Casa">Casa</MenuItem>
                                <MenuItem value="Servidor">Servidor</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="processador"
                            label="Processador"
                            name="processador"
                            value={tarefa.processador}
                            onChange={mudaAtributo}
                        />
                       <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="placamae"
                            label="Placa Mãe"
                            name="placamae"
                            value={tarefa.placamae}
                            onChange={mudaAtributo}
                        />
                          <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="placavideo"
                            label="Placa de Video"
                            name="placavideo"
                            value={tarefa.placavideo}
                            onChange={mudaAtributo}
                        />
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="fonte"
                            label="Fonte"
                            name="fonte"
                            value={tarefa.fonte}
                            onChange={mudaAtributo}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="memoria"
                            label="Memoria"
                            name="memoria"
                            value={tarefa.memoria}
                            onChange={mudaAtributo}
                        />
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="hdssd"
                            label="HD ou SSD"
                            name="hdssd"
                            value={tarefa.hdssd}
                            onChange={mudaAtributo}
                        />
                          <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="gabinete"
                            label="Gabinete"
                            name="gabinete"
                            value={tarefa.gabinete}
                            onChange={mudaAtributo}
                        />
                        
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="prazoFim"
                            label="Prazo Final"
                            name="prazoFim"
                            type="date"
                            value={tarefa.prazoFim}
                            onChange={mudaAtributo}
                            inputProps={{ min: hoje }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.botao}
                        >
                            <SaveIcon /> Salvar
          </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TableContainer component={Paper}>
                        <Table aria-label="Relação de Tarefas   ">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Código</TableCell>
                                    <TableCell>Tipo</TableCell>
                                    <TableCell align="left">Prazo Final</TableCell>
                                    <TableCell>Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tarefas.map((t) => (
                                    <TableRow key={t.id}>
                                        <TableCell>{t.id}</TableCell>
                                        <TableCell>{t.tipo}</TableCell>
                                        <TableCell align="left">{converteData(t.prazoFim)}</TableCell>
                                        <TableCell>
                                            <Button startIcon={<DeleteIcon />}
                                                onClick={() => apagaRegistro(t.id)}
                                                variant="outlined" color="secondary">Apagar</Button>
                                            <Button startIcon={<EditIcon />}
                                                onClick={() => {
                                                    setTarefa(t)
                                                    setEditando(true)
                                                }}
                                                variant="outlined" color="primary">Editar</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {tarefas.length === 0 &&
                                <Typography 
                                component="h3"
                            align="center">Sem computadores para montagem!</Typography>
                                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}