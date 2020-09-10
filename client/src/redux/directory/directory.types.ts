export interface DirectoryState {
  sections: Section[]
}

export interface Section {
  title: string
  imageUrl: string
  id: number
  linkUrl: string
  size?: string
}