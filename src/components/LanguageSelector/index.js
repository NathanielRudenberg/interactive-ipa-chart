import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './language-selector.scss';

export default class LanguageSelector extends Component {
    constructor(props) {
        super();

        this.state = {
            langFamButton: null,
            langVarButton: null,
            menuOpen: false,
            languageSelected: false,
        }
    }

    handleClickLangFam = event => {
        this.setState({ langFamButton: event.currentTarget });
    }

    handleCloseLangFam = () => {
        this.setState({ langFamButton: null });
    }

    handleClickLangVar = event => {
        this.setState({ langVarButton: event.currentTarget });
    }

    handleCloseLangVar = () => {
        this.setState({ langVarButton: null });
    }

    render() {
        return (
            <>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button aria-controls="language-family-menu" aria-haspopup="true" onClick={this.handleClickLangFam}>
                        Language Family
                    </Button>
                    <Button aria-controls="language-variant-menu" aria-haspopup="true" onClick={this.handleClickLangVar}>
                        Language Variant
                    </Button> 
                </ButtonGroup>

                <Menu
                    id="language-family-menu"
                    anchorEl={this.state.langFamButton}
                    keepMounted
                    open={Boolean(this.state.langFamButton)}
                    onClose={this.handleCloseLangFam}
                >
                    <MenuItem onClick={this.handleCloseLangFam}>Germanic</MenuItem>
                    <MenuItem onClick={this.handleCloseLangFam}>Romance</MenuItem>
                    <MenuItem onClick={this.handleCloseLangFam}>Sinitic</MenuItem>
                </Menu>

                <Menu
                    id="language-variant-menu"
                    anchorEl={this.state.langVarButton}
                    keepMounted
                    open={Boolean(this.state.langVarButton)}
                    onClose={this.handleCloseLangVar}
                >
                    <MenuItem onClick={this.handleCloseLangVar}>French</MenuItem>
                    <MenuItem onClick={this.handleCloseLangVar}>General American English</MenuItem>
                    <MenuItem onClick={this.handleCloseLangVar}>Haitian Creole</MenuItem>
                </Menu>
            </>
        );
    }
}