import Link from 'next/link';
import AdminLayout from '../../../components/AdminLayout';
// import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// const Index = () => (
//     // <Layout menuItem="about">
//     //     <div className="template-background">
//     //         <div className="page-content">
//     //             <div className="post about">

//     //             </div>
//     //         </div>
//     //     </div>
//     // </Layout>
//     <AdminLayout>laborCosts</AdminLayout>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <AdminLayout>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                />
            </AdminLayout>
        );
    }
}

export default Index;
