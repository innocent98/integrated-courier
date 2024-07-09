import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query: string): Promise<string> =>
  new Promise((resolve) => rl.question(query, resolve));

const capitalizeFirstLetter = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

const lowerFirstLetter = (text: string): string =>
  text.charAt(0).toLowerCase() + text.slice(1);

const writeFileIfEmpty = (filePath: string, content: string): void => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
};

const deleteFileIfExists = (filePath: string) => {
  if (fs.existsSync(filePath)) {
    fs.rmSync(filePath);
  }
};

const deleteDirectory = (directoryPath: string) => {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach((file) => {
      const currentPath = path.join(directoryPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        // 디렉토리인 경우 재귀적으로 삭제
        deleteDirectory(currentPath);
      } else {
        // 파일인 경우 삭제
        fs.unlinkSync(currentPath);
      }
    });
    // 디렉토리 자체를 삭제
    fs.rmdirSync(directoryPath);
  } else {
    // console.log("디렉토리가 존재하지 않습니다.");
  }
};

const setSuffix = (text: string, suffix: string): string =>
  text.endsWith(suffix) ? text : text + suffix;

interface ModuleContents {
  moduleImports: string;
  moduleProps: string;
  moduleTypes: string;
  moduleElements: string;
}

const generateModuleContents = (
  inputTemplateName: string,
  moduleNames: string[],
): ModuleContents =>
  moduleNames.reduce<ModuleContents>(
    (acc, curr) => {
      const templateName = capitalizeFirstLetter(inputTemplateName);
      const moduleName =
        capitalizeFirstLetter(templateName) +
        capitalizeFirstLetter(setSuffix(curr, "Module"));
      const lowerModuleName = lowerFirstLetter(moduleName);

      acc.moduleImports += `import { ${moduleName} } from "~/components/Modules/${templateName}/${moduleName}";\n`;
      acc.moduleProps += `${lowerModuleName}Props: { title: "${moduleName}" },\n  `;
      acc.moduleTypes += `  ${lowerModuleName}Props: React.ComponentProps<typeof ${moduleName}>;\n`;
      acc.moduleElements += `     <${moduleName} {...props.${lowerModuleName}Props}  />\n`;

      return acc;
    },
    { moduleImports: "", moduleProps: "", moduleTypes: "", moduleElements: "" },
  );

const createStories = (dirPath: string, name: string): void => {
  return;
  const parts = dirPath.split("/");
  const componentType = parts[parts.length - 2];
  const parent = parts[parts.length - 1];
  writeFileIfEmpty(
    path.join(dirPath, `${name}.stories.tsx`),
    `import type { Meta, StoryObj } from '@storybook/react';
import { ${name} } from './${name}';
const meta: Meta = {
  title: '${componentType}/${parent}/${name}',
  component: ${name},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<typeof ${name}>;
export const Default: Story = {
  args: {
  },
};`,
  );
};

const createComponent = (inputName: string): void => {
  const componentName = capitalizeFirstLetter(inputName);
  const dirPath = path.join(
    __dirname,
    "src/components",
    "Components",
    componentName,
  );
  fs.mkdirSync(dirPath, { recursive: true });
  writeFileIfEmpty(
    path.join(dirPath, `${componentName}.tsx`),
    `type Props = {
      // Add props here
    };

export const ${componentName} = (props: Props) => {
  return (<div>${componentName}</div>);
};`,
  );
  createStories(dirPath, componentName);
};

const createAtom = (inputName: string): void => {
  const atomName = setSuffix(capitalizeFirstLetter(inputName), "Atom");
  const dirPath = path.join(__dirname, "src/components", "Atoms", atomName);
  fs.mkdirSync(dirPath, { recursive: true });
  writeFileIfEmpty(
    path.join(dirPath, `${atomName}.tsx`),
    `type Props = {
      // Add props here
    };

export const ${atomName} = (props: Props) => {
  return (<div>${atomName}</div>);
};`,
  );
  createStories(dirPath, atomName);
};

const createSingleModule = (inputName: string): void => {
  const moduleName = capitalizeFirstLetter(setSuffix(inputName, "Module"));
  const dirPath = path.join(__dirname, "src/components", "Modules", inputName);
  fs.mkdirSync(dirPath, { recursive: true });
  const filePath = path.join(dirPath, `${moduleName}.tsx`);
  writeFileIfEmpty(
    filePath,
    `type Props = {
      // Add props here
    };

export const ${moduleName} = (props: Props) => {
  return (<div>${moduleName}</div>);
};
`,
  );
  createStories(dirPath, moduleName);
};

const createTemplate = (
  inputTemplateName: string,
  moduleNames: string[],
): void => {
  const templateName = capitalizeFirstLetter(
    setSuffix(inputTemplateName, "Template"),
  );
  const dirPath = path.join(
    __dirname,
    "src/components",
    "Templates",
    capitalizeFirstLetter(inputTemplateName),
  );
  fs.mkdirSync(dirPath, { recursive: true });

  const { moduleImports, moduleProps, moduleTypes, moduleElements } =
    generateModuleContents(inputTemplateName, moduleNames);

  const templateContent = `${moduleImports.trimEnd()}
  import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
${moduleTypes.trimEnd()}
};

export const ${templateName} = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
    {/*
    <Header style={{ padding: 0, height: 50 }}>
    place for header module
    </Header>
    */}

    <Content style={{ overflow: "auto" }}>
      ${moduleElements.trimEnd()}
    </Content>

    {/*
    <Footer style={{ padding: 0, minHeight: 50 }}>
    place for footer module
    </Footer>
    */}
  </Layout>
  );
};
  `;

  writeFileIfEmpty(path.join(dirPath, `${templateName}.tsx`), templateContent);

  createStories(dirPath, templateName);
  moduleNames.forEach((module) => {
    const dirPathModule = path.join(
      __dirname,
      "src/components",
      "Modules",
      capitalizeFirstLetter(inputTemplateName),
    );
    fs.mkdirSync(dirPathModule, { recursive: true });

    const moduleName =
      capitalizeFirstLetter(inputTemplateName) +
      capitalizeFirstLetter(setSuffix(module, "Module"));

    const moduleContent = `type Props = {
  title: string;
};

export const ${moduleName} = (props: Props) => {
  return <div>{props.title}</div>;
};
`;

    writeFileIfEmpty(
      path.join(dirPathModule, `${moduleName}.tsx`),
      moduleContent,
    );
    createStories(dirPathModule, moduleName);
  });
};

const createPage = (inputName: string, moduleNames: string[]): void => {
  const pageName = capitalizeFirstLetter(inputName);
  const dirPath = path.join(__dirname, "src/app", inputName);
  const dirPathContainer = path.join(dirPath, "container");
  fs.mkdirSync(dirPathContainer, { recursive: true });

  const { moduleImports, moduleProps, moduleTypes, moduleElements } =
    generateModuleContents(pageName, moduleNames);

  const pageContent = `"use client";
import { ${pageName}Container } from "./container/${pageName}Container";

const ${pageName} = () => {
  return <${pageName}Container />;
};

export default ${pageName};
`;

  const containerContent = `import { ${pageName}Template } from "~/components/Templates/${pageName}/${pageName}Template";

export const ${pageName}Container = () => {

  const ${pageName.toLowerCase()}TemplateProps: React.ComponentProps<typeof ${pageName}Template> = {
    ${moduleProps.trimEnd()}
  };

  return <${pageName}Template {...${pageName.toLowerCase()}TemplateProps} />;
};
`;

  writeFileIfEmpty(path.join(dirPath, "page.tsx"), pageContent);
  writeFileIfEmpty(
    path.join(dirPathContainer, `${pageName}Container.tsx`),
    containerContent,
  );
};

const main = async (): Promise<void> => {
  const type = await askQuestion(
    "\nSelect type number and press enter\n[1] page\n[2] template\n[3] module\n[4] component\n[5] atom\n[init] init project\n[else] exit\n",
  );

  switch (type) {
    case "init":
      deleteDirectory(path.join(__dirname, "src/app/_components"));
      deleteFileIfExists(path.join(__dirname, "src/app/page.tsx"));
      deleteFileIfExists(path.join(__dirname, "next.config.js"));
      deleteFileIfExists(path.join(__dirname, ".env"));
      createPage("home", ["Content"]);
      createTemplate("home", ["Content"]);

      const settings = `{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma"
  }
}
      `;
      const dirPathVscode = path.join(__dirname, ".vscode");
      fs.mkdirSync(dirPathVscode, { recursive: true });
      writeFileIfEmpty(dirPathVscode + "/settings.json", settings);

      const nextConfig = `
      /* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/**
 * Run \`build\` or \`dev\` with \`SKIP_ENV_VALIDATION\` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
};

export default config;

      `;

      writeFileIfEmpty(path.join(__dirname, "next.config.js"), nextConfig);

      fs.readFile(
        "./src/env.js",
        "utf8",
        (err: NodeJS.ErrnoException | null, data: string) => {
          if (err) {
            console.error("Failed to read file:", err);
            return;
          }

          data = data
            .replace("process.env.NEXTAUTH_SECRET", "process.env.NEXTAUTH_URL")
            .replace("DISCORD_CLIENT_ID: z.string(),", "")
            .replace("DISCORD_CLIENT_SECRET: z.string(),", "")
            .replace("DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,", "")
            .replace(
              "DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,",
              "",
            );

          // Write the updated menu back to the file
          fs.writeFile(
            "./src/env.js",
            data,
            "utf8",
            (err: NodeJS.ErrnoException | null) => {
              if (err) {
                console.error("Failed to write to file:", err);
              }
            },
          );
        },
      );

      fs.readFile(
        ".eslintrc.cjs",
        "utf8",
        (err: NodeJS.ErrnoException | null, data: string) => {
          if (err) {
            console.error("Failed to read file:", err);
            return;
          }

          if (
            !data.includes(`"@typescript-eslint/no-unsafe-assignment": "off"`)
          ) {
            data = data.replace(
              `"@typescript-eslint/consistent-type-definitions": "off",`,
              `"@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-redundant-type-constituents": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-floating-promises": "off",`,
            );

            // Write the updated menu back to the file
            fs.writeFile(
              ".eslintrc.cjs",
              data,
              "utf8",
              (err: NodeJS.ErrnoException | null) => {
                if (err) {
                  console.error("Failed to write to file:", err);
                }
              },
            );
          }
        },
      );

      // In case using nextauth
      if (fs.existsSync("./src/server/auth.ts")) {
        const env = `DATABASE_URL=postgresql://dbmasteruser:skanfoqtm1!@ls-997db87df4e756e40907ff5fcb4b5ea288a837aa.cv9qejjzxt9e.ap-northeast-2.rds.amazonaws.com:5432/test
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000`;
        writeFileIfEmpty(path.join(__dirname, ".env"), env);

        fs.readFile(
          "./src/server/auth.ts",
          "utf8",
          (err: NodeJS.ErrnoException | null, data: string) => {
            if (err) {
              console.error("Failed to read file:", err);
              return;
            }

            data = data
              .replace(`env.DISCORD_CLIENT_ID`, `""`)
              .replace(`env.DISCORD_CLIENT_SECRET`, `""`);

            // Write the updated menu back to the file
            fs.writeFile(
              "./src/server/auth.ts",
              data,
              "utf8",
              (err: NodeJS.ErrnoException | null) => {
                if (err) {
                  console.error("Failed to write to file:", err);
                }
              },
            );
          },
        );
      }
      break;
    case "5":
      const atomName = await askQuestion(
        "\nEnter atom name(ex: Button)\nPress Enter to exit\n",
      );
      if (atomName) createAtom(atomName);
      break;
    case "4":
      const componentName = await askQuestion(
        "\nEnter component name(ex: Button)\nPress Enter to exit\n",
      );
      if (componentName) createComponent(componentName);
      break;
    case "3":
      const moduleName = await askQuestion(
        "\nEnter module name(ex: HomeHeader)\nPress Enter to exit\n",
      );
      if (moduleName) createSingleModule(moduleName);
      break;
    case "2":
      const templateName = await askQuestion(
        "\nEnter template name(ex: Home or HomeModal)\nPress Enter to exit\n",
      );
      if (templateName) {
        const moduleNamesText = await askQuestion(
          "\nEnter module names(ex: Header,Items)\nPress Enter to exit\n",
        );
        if (moduleNamesText)
          createTemplate(templateName, moduleNamesText.split(","));
      }
      break;
    case "1":
      const pageName = await askQuestion(
        "\nEnter page name(ex: home or contact)\nPress Enter to exit\n",
      );
      if (pageName) {
        const moduleNamesText = await askQuestion(
          "\nEnter module names(ex: Header,Items)\nPress Enter to exit\n",
        );
        if (moduleNamesText) {
          const moduleNames = moduleNamesText.split(",");
          createPage(pageName, moduleNames);
          createTemplate(pageName, moduleNames);
        }
      }
      break;
    default:
      console.log("Exiting...");
  }
  console.log("\nProcess Done\n");
  rl.close();
};

void main();
