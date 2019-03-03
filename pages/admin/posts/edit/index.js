import { createElement } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Table, Button, Input } from 'antd';
import { Editor, EditorState, RichUtils } from 'draft-js';
import AdminLayout from '../../../../components/AdminLayout';

const { TextArea } = Input;

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
            editor: null,
        };

        this.onChange = (editorState) =>
            console.log('editorState', editorState.toJS()) || this.setState({ editorState });

        this.focusEditor = () => {
            if (this.editor) {
                this.editor.focus();
            }
        };
    }

    componentDidMount() {
        this.setState({ editor: Editor });
        this.focusEditor();
        
    }

    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    };

    render() {
        const { title } = this.props.postData;
        const ClientEditor = this.state.editor;

        return (
            <AdminLayout>
                <div className="admin-top-bar">
                    <div className="editor-bar">
                        <Button icon="bold" onClick={this.onBoldClick} />
                    </div>
                    <div className="control-bar">
                        <Button icon="delete" type="danger" />
                        {` `}
                        <Button icon="save" />
                    </div>
                </div>
                <div className="admin-content">
                    <div className="admin-card admin-card__with-padding">
                        <h1>{title || 'Название статьи'}</h1>
                        <div id="editor-container" className="c-editor-container js-editor-container">
                            <div className="editor">
                                {this.state.editor ? (
                                    <ClientEditor
                                        editorState={this.state.editorState}
                                        onChange={this.onChange}
                                        placeholder="Просто начните..."
                                        ref={this.setEditor}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx global>{`
                    .pape-draft .image-caption:empty {
                        display: inline-block;
                    }
                    .editor-bar {
                        flex: 1;
                    }
                    .control-bar {
                        flex: 1;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .post-input {
                        border: none;
                        outline: none;
                        background: none;
                        flex: 1 1 100%;
                    }
                    .admin-post-h1 {
                        font-size: 40px;
                    }
                    .admin-post-h3 {
                        font-size: 25px;
                    }
                `}</style>
            </AdminLayout>
        );
    }
}

Index.getInitialProps = async function() {
    const res = await fetch('https://helpforest.azurewebsites.net/GetPost', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 'bdd5500a-7307-4a99-8601-328d47d12fdf',
        }),
    });
    const data = await res.json();
    const postData = { title: data.Header, description: data.Description, post: JSON.parse(data.Body) };

    return { postData };
};

export default Index;
