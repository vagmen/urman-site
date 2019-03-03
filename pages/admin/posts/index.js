import { Table, Button } from 'antd';
import Link from 'next/link';
import moment from 'moment';
import fetch from 'isomorphic-unfetch';
import AdminLayout from '../../../components/AdminLayout';

const dataSource = [
    {
        key: '1',
        name: 'Статья 1',
        date: moment().format(),
    },
    {
        key: '2',
        name: 'Статья 2',
        date: moment().format(),
    },
];

const columns = [
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
    },
    {
        dataIndex: 'control',
        key: 'control',
        render: (text, record) => (
            <span>
                <Link href={`/admin/posts/edit?id=${record.key}`} as={`/admin/posts/${record.key}`}>
                    <Button icon="edit" />
                </Link>
                {/* {` `}
                <Link href="/admin/posts/edit">
                    <Button icon="delete" type="danger" />
                </Link> */}
            </span>
        ),
    },
];

const Index = ({ journalItems }) => (
    <AdminLayout>
        <div className="admin-top-bar">
            <Link href="/admin/posts/edit">
                <Button icon="plus" />
            </Link>
        </div>
        <div className="admin-content">
            {journalItems.length !== 0 && (
                <div className="admin-card">
                    <div className="admin-card-header">
                        <h2>Статьи</h2>
                    </div>
                    <Table dataSource={journalItems} columns={columns} />
                </div>
            )}
        </div>
    </AdminLayout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://helpforest.azurewebsites.net/GetPosts', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    const journalItems = data.map((item) => {
        return { key: item.Id, name: item.Header, date: moment().format(), description: item.Description };
    });
    return {
        journalItems,
    };
};

export default Index;
