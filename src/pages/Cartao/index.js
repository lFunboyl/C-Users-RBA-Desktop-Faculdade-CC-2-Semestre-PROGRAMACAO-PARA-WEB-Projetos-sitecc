//cSpell:Ignore cartao  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    cartao: {
        width: '100%',
       
    },
    media: {
        height: 500

    }    
});

export default function Cartao() {
    const classes = useStyles();

    return (
        
            <Card className={classes.cartao}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1498409785966-ab341407de6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                             Nosso objetivo
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            RR Tech tem como objetivo garantir a total satisfação do cliente.
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" variant="outlined">
                        Compartilhe
        </Button>
                    <Button size="small" color="secondary" variant="outlined">
                        Saiba Mais
        </Button>
                </CardActions>
            </Card>
       
    );
}
