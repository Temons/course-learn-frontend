import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'features', 'entities', 'pages', 'widgets'];
  return layers.some(layer => value.startsWith(layer));
}

const layerSrc = ['src/shared'];

function isAbsoluteSrc(value: string) {
  return layerSrc.some(layer => value.startsWith(layer));
}

files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations();

  importDeclarations.forEach(importDeclaration => {
    const value = importDeclaration.getModuleSpecifierValue();

    if (isAbsolute(value)) {
      return importDeclaration.setModuleSpecifier('@/' + value);
    }

    if (isAbsoluteSrc(value)) {
      const segments = value.split('/');
      const newSegments = ['@', ...segments.slice(1)];
      const newValue = newSegments.join('/');
      importDeclaration.setModuleSpecifier(newValue);
    }
  });
});

project.save();
