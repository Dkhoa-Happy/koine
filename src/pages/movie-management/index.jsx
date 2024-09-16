import { Button, Form, Image, Input, Modal, Table, Upload } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import uploadFile from "../../utils/upload";

function MovieManagement() {
  const [form] = useForm();
  const [dataSource, setDataSource] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const columns = [
    {
      title: "Movie name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Poster",
      dataIndex: "poster_path",
      key: "poster_path",
      render: (poster_path) => <Image src={poster_path} width={150} />,
    },
  ];

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  async function fetcMovie() {
    const response = await axios.get(
      "https://66c6a2a88b2c10445bc73c2d.mockapi.io/Movie"
    );

    setDataSource(response.data);
  }

  function handleShowModal() {
    setIsOpen(true);
  }

  function handleHideModal() {
    setIsOpen(false);
  }

  async function handleSubmit(values) {
    console.log(values);
    console.log(values.poster_path.file.originFileObj);
    const url = await uploadFile(values.poster_path.file.originFileObj);
    values.poster_path = url;
    console.log(values);

    const response = axios.post(
      "https://66c6a2a88b2c10445bc73c2d.mockapi.io/Movie",
      values
    );

    setDataSource([...dataSource, values]);

    //clear form
    form.resetFields();

    //hide modal
    handleHideModal();
  }

  function handleOk() {
    form.submit();
  }

  //function annoymous
  //Cach 1:
  useEffect(() => {
    fetcMovie();
  }, []);

  //Cach 2
  // useEffect(function () {
  //   fetcMovie, [];
  // }, []);

  return (
    <div>
      <Button type="primary" onClick={handleShowModal}>
        Add New Movie
      </Button>

      <Table columns={columns} dataSource={dataSource} />

      <Modal
        open={isOpen}
        title="Add New Movie"
        onCancel={handleHideModal}
        onOk={handleOk}
      >
        <Form labelCol={{ span: 24 }} form={form} onFinish={handleSubmit}>
          <Form.Item label="Movie Name" name={"name"}>
            <Input />
          </Form.Item>

          <Form.Item label="Description Name" name={"description"}>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Trailer" name={"trailer"}>
            <Input />
          </Form.Item>

          <Form.Item label="Category" name={"category"}>
            <Input />
          </Form.Item>

          <Form.Item label="Poster" name={"poster_path"}>
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
}

export default MovieManagement;
