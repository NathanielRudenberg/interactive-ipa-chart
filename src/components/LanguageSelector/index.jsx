import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DropMenuItem from '../DropMenuItem';
import DropMenu from '../DropMenu';
import './language-selector.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import UndoIcon from '@mui/icons-material/Undo';

export default class LanguageSelector extends Component {
    constructor(props) {
        super();

        this.state = {
            langFam: null,
            langVar: null,
            langFamButton: null,
            langVarButton: null,
            menuOpen: false,
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

    handleSelectLangFam = item => {
        this.setState((prevState) => {
            this.handleCloseLangFam();
            return {
                ...prevState,
                langFam: item,
            }
        });
    }

    handleSelectLangVar = (item, value) => {
        let updateLanguage = this.props.updateLanguage;
        this.setState((prevState) => {
            return {
                ...prevState,
                langVar: item,
            }
        });
        updateLanguage(value);
        this.handleCloseLangVar();
    }

    handleClear = () => {
        this.setState({langVar: null});
        this.props.clear();
    }

    render() {
        return (
            <>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    {/* <Button aria-controls="language-family-menu" aria-haspopup="true" onClick={this.handleClickLangFam} endIcon={<ExpandMoreRoundedIcon className='expand-more' />}>
                        {this.state.langFam || 'Language Family'}
                    </Button> */}
                    <Button aria-controls="language-variant-menu" aria-haspopup="true" onClick={this.handleClickLangVar} endIcon={<ExpandMoreRoundedIcon />}>
                        {this.state.langVar || 'Select a Language'}
                    </Button> 
                    {this.state.langVar && <Button variant='contained' onClick={this.handleClear}>
                        <UndoIcon/> <span style={{paddingLeft: '8px'}}>Clear</span>
                    </Button>}
                </ButtonGroup>

                <Menu
                    id="language-family-menu"
                    anchorEl={this.state.langFamButton}
                    // getContentAnchorEl={null}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    open={Boolean(this.state.langFamButton)}
                    onClose={this.handleCloseLangFam}
                >
                    <DropMenuItem onSelect={this.handleSelectLangFam}>Germanic</DropMenuItem>
                    <DropMenuItem onSelect={this.handleSelectLangFam}>Romance</DropMenuItem>
                    <DropMenuItem onSelect={this.handleSelectLangFam}>Sinitic</DropMenuItem>
                </Menu>

                <Menu
                    id="language-variant-menu"
                    anchorEl={this.state.langVarButton}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    open={Boolean(this.state.langVarButton)}
                    onClose={this.handleCloseLangVar}
                >
                    {/* <DropMenuItem onSelect={this.handleSelectLangVar} value="french">French</DropMenuItem> */}
                    {/* <DropMenuItem onSelect={this.handleSelectLangVar} value="general-american-english">General American English</DropMenuItem> */}
                    {/* <DropMenuItem onSelect={this.handleSelectLangVar} value="haitian-creole">Haitian Creole</DropMenuItem> */}
                    {/* <DropMenuItem onSelect={this.handleSelectLangVar} value="icelandic">Icelandic</DropMenuItem> */}
                    <DropMenuItem onSelect={this.handleSelectLangVar} value="spanish">Spanish</DropMenuItem>
                    {/* <DropMenuItem onSelect={this.handleSelectLangVar} value="korean">Korean</DropMenuItem> */}
                    {/* <DropMenuItem onSelect={this.handleSelectLangVar} value="test">TEST</DropMenuItem> */}
                </Menu>
            </>
        );
    }
}