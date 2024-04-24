const fs = require("fs");
const path = require("path");

// Captura os argumentos do terminal
const [, , baseFolder, newFolder] = process.argv;

// Define o caminho base padrão
const basePath = "./src/common";

// Caminho completo da nova pasta
const fullPath = path.join(basePath, baseFolder, newFolder);

// Cria a pasta
fs.mkdirSync(fullPath, { recursive: true });

// Nome da pasta com a primeira letra maiúscula para usar nos arquivos
const folderNameCapitalized = newFolder.charAt(0).toUpperCase() + newFolder.slice(1);

// Conteúdos dos arquivos
const indexContent = `import * as S from "./styles"

const ${folderNameCapitalized} = () => {
  return <S.${folderNameCapitalized}Container></S.${folderNameCapitalized}Container>;
};

export default ${folderNameCapitalized};
`;

const stylesContent = `import styled from "styled-components";

export const ${folderNameCapitalized}Container = styled.div\`\`;
`;

const propsContent = `export interface ${folderNameCapitalized}Props {}
`;

// Cria cada arquivo dentro da pasta com o conteúdo específico
fs.writeFileSync(path.join(fullPath, "index.tsx"), indexContent);
fs.writeFileSync(path.join(fullPath, "styles.ts"), stylesContent);
fs.writeFileSync(path.join(fullPath, "props.ts"), propsContent);

console.log(`Pasta '${newFolder}' e arquivos criados com sucesso em '${fullPath}'`);
