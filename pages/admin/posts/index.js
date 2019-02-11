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
        dataIndex: 'control',
        key: 'control',
        render: (text, record) => (
            <span>
                <Link href="/admin/posts/edit">
                    <Button icon="edit" />
                </Link>
                {` `}
                <Link href="/admin/posts/edit">
                    <Button icon="delete" type="danger" />
                </Link>
            </span>
        ),
    },
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
];

const Index = () => (
    <AdminLayout>
        <div className="admin-top-panel">
            <Link href="/admin/posts/edit">
                <Button icon="plus" />
            </Link>
        </div>
        <Table dataSource={dataSource} columns={columns} />
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
    console.log('data', data);

    return {
        // journalItems: journalData,
    };
};

export default Index;
