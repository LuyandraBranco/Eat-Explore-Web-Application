import React, { useEffect, useState } from "react";
import {
  FormContainer,
  TitleContainer,
  Title,
  FormComponent,
  FormGroup,
  Label,
  TextArea,
  Button,
  Input,
  Select,
  Option,
} from "./styles";
import { CaretUp } from "phosphor-react";
// import { Input } from "../Input";
import axios from "axios";

export function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    rating: 0,
    horaAbertura: "",
    horaFechamento: "",
    maps: "",
    photoPath: "",
    nif: "",
    phone1: 0,
    phone2: 0,
    idbairro: 1,
    province: "",
    municipio: "",
    comuna: "",
    bairro: "",
  });
  const [provincias, setProvincias] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [bairros, setBairros] = useState([]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    // Função assíncrona para buscar as províncias da API
    const fetchProvincias = async () => {
      try {
        const response = await axios.get(
          "http://192.168.43.89:3000/localizacao/provincia"
        );
        setProvincias(response.data);
      } catch (error) {
        console.error("Erro ao buscar províncias:", error);
      }
    };

    // Chama a função para buscar províncias quando o componente é montado
    fetchProvincias();
  }, []);

  const fetchMunicipios = async (provinciaId: any) => {
    try {
      const response = await axios.get(
        `http://192.168.43.89:3000/localizacao/municipio/${provinciaId}`
      );
      setMunicipios(response.data);
    } catch (error) {
      console.error("Erro ao buscar municípios:", error);
    }
  };

  const fetchComunas = async (municipioId: any) => {
    try {
      const response = await axios.get(
        `http://192.168.43.89:3000/localizacao/comunas/${municipioId}`
      );
      setComunas(response.data);
    } catch (error) {
      console.error("Erro ao buscar comunas:", error);
    }
  };

  const fetchBairros = async (comunaId: any) => {
    try {
      const response = await axios.get(
        `http://192.168.43.89:3000/localizacao/bairro/${comunaId}`
      );
      setBairros(response.data);
    } catch (error) {
      console.error("Erro ao buscar bairros:", error);
    }
  };

  const handleProvinceChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      municipio: "", // Reinicia o campo município ao selecionar uma nova província
    });

    // Chama a função para buscar os municípios quando a província é selecionada
    fetchMunicipios(value);
  };

  const handleMunicipioChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      comuna: "", // Reinicia o campo comuna ao selecionar um novo município
    });

    // Chama a função para buscar as comunas quando o município é selecionado
    fetchComunas(value);
  };

  const handleComunaChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      bairro: "", // Reinicia o campo bairro ao selecionar uma nova comuna
    });

    // Chama a função para buscar os bairros quando a comuna é selecionada
    fetchBairros(value);
  };

  const handleBairroChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      idbairro: parseInt(value), // Converte o valor para inteiro, se necessário
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      // Realize uma requisição POST para a API
      const response = await axios.post(
        "http://192.168.43.89:3000/restaurante",
        {
          email: formData.email,
          password: formData.password,
          name: formData.name,
          address: formData.address,
          rating: formData.rating,
          horaAbertura: formData.horaAbertura,
          horaFechamento: formData.horaFechamento,
          maps: formData.maps,
          photoPath: formData.photoPath,
          nif: formData.nif,
          phone1: formData.phone1,
          phone2: formData.phone2,
          idBairro: formData.idbairro,
        },
        { params: { idBairro: 1 } }
      );

      // Aqui você pode lidar com a resposta da API conforme necessário
      console.log("Resposta da API:", response.data);
      alert("Restaurante cadastro com sucesso")
    } catch (error) {
      // Trate erros aqui
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <FormContainer>
      <TitleContainer>
        <Title>Junte-se a nós e cadastre os dados do seu restaurante</Title>
      </TitleContainer>

      <FormComponent action="#" onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome do espaço (Restaurante, Bar, Roulotes)</Label>
          <Input
            type={"text"}
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Endereço</Label>
          <Input
            type={"text"}
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Localização</Label>
        </FormGroup>
        <FormGroup>
          <Label>Província</Label>
          <Select
            name="province"
            value={formData.province}
            onChange={handleProvinceChange}
          >
            {provincias.map((provincia: any) => (
              <Option key={provincia.id} value={provincia.id}>
                {provincia.nome}
              </Option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Município</Label>
          <Select
            name="municipio"
            value={formData.municipio}
            onChange={handleMunicipioChange}
          >
            {municipios.map((municipio: any) => (
              <Option key={municipio.id} value={municipio.id}>
                {municipio.nome}
              </Option>
            ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Comuna</Label>
          <Select
            name="comuna"
            value={formData.comuna}
            onChange={handleComunaChange}
          >
            {Array.isArray(comunas) &&
              comunas.map((comuna: any) => (
                <Option key={comuna.id} value={comuna.id}>
                  {comuna.nome}
                </Option>
              ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Bairro</Label>
          <Select
            name="idbairro"
            value={formData.idbairro}
            onChange={handleBairroChange}
          >
            {Array.isArray(bairros) &&
              bairros.map((bairro: any) => (
                <Option key={bairro.id} value={bairro.id}>
                  {bairro.nome}
                </Option>
              ))}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type={"text"}
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type={"password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Telefone 1</Label>
          <Input
            type={"number"}
            name="phone1"
            value={formData.phone1}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Telefone 2</Label>
          <Input
            type={"number"}
            name="phone2"
            value={formData.phone2}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Rating</Label>
          <Input
            width={"80%"}
            type={"number"}
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Hora de Abertura</Label>
          <Input
            width={"80%"}
            type={"time"}
            name="horaAbertura"
            value={formData.horaAbertura}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Hora do Fecho</Label>
          <Input
            width={"80%"}
            type={"time"}
            name="horaFechamento"
            value={formData.horaFechamento}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Photo Path</Label>
          <Input
            width={"80%"}
            type={"file"}
            name="photoPath"
            value={formData.photoPath}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Maps</Label>
          <Input
            width={"80%"}
            type={"text"}
            name="maps"
            value={formData.maps}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>NIF</Label>
          <Input
            width={"80%"}
            type={"text"}
            name="nif"
            value={formData.nif}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type="submit">Cadastrar-se</Button>
      </FormComponent>
    </FormContainer>
  );
}
